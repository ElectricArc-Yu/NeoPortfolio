import random
# plt import moved to bottom try-block

# 设置模拟参数
NUM_AGENTS = 100
MAX_LEVELS = 50   # 50 级足够展示曲线了，100 级后期偏差太大
COST_PER_LEVEL = 20  # 降低基础痛苦

class Agent:
    def __init__(self, agent_id):
        self.id = agent_id
        # 核心特质：降低初始门槛，增强对比效果
        self.patience = random.uniform(0.1, 0.4)  # 玩家对效用的最低要求
        self.future_discount = random.uniform(0.8, 0.98) # 调高远见，模拟“抱有希望”的玩家
        self.is_active = True
        self.churn_level = -1

    def calculate_propensity(self, level, short_reward, long_reward, level_remains):
        """
        基于论文公式的简化版:
        Pi = (P_short * V_now + P_long * V_future) / Cost
        Cost 随等级指数增长: BaseCost * (1.1 ^ level)
        """
        current_cost = COST_PER_LEVEL * (1.1 ** level)
        
        # P_long 这里受距离目标的 level 数影响（双曲贴现简化）
        discounted_long_reward = long_reward * (self.future_discount ** level_remains)
        
        # 激活阈值计算
        pi = (short_reward + discounted_long_reward) / current_cost
        return pi

    def run_level(self, level, short_reward, long_reward, level_remains):
        if not self.is_active:
            return
        
        pi = self.calculate_propensity(level, short_reward, long_reward, level_remains)
        
        # 判定是否流失
        if pi < self.patience:
            self.is_active = False
            self.churn_level = level

def simulate(scenario_name, rewards_dist):
    agents = [Agent(i) for i in range(NUM_AGENTS)]
    retention_per_level = []

    for level in range(1, MAX_LEVELS + 1):
        short_reward = rewards_dist[level-1]["short"]
        long_reward = rewards_dist[level-1]["long"]
        remains = MAX_LEVELS - level
        
        for agent in agents:
            agent.run_level(level, short_reward, long_reward, remains)
        
        active_count = sum(1 for a in agents if a.is_active)
        retention_per_level.append(active_count)
    
    return retention_per_level

# --- 设定方案 ---

# 方案 A：传统 MMO (延迟满足)
# 给予 1-5 级“新手福利” (登录奖励)，随后断供，模拟断崖式流失
scenario_a_rewards = []
for l in range(1, MAX_LEVELS + 1):
    if l <= 5:
        scenario_a_rewards.append({"short": 40, "long": 5000}) # 初期给点甜头
    elif l < MAX_LEVELS:
        scenario_a_rewards.append({"short": 0, "long": 5000})  # 中期断供，只有远期大饼
    else:
        scenario_a_rewards.append({"short": 5000, "long": 0})

# 方案 B：面包屑方案 (持续反馈)
# 每一级都给稳定的奖励，但随着指数成本上升，后期也会自然流失
scenario_b_rewards = []
for l in range(1, MAX_LEVELS + 1):
    scenario_b_rewards.append({"short": 150, "long": 0})

# 运行模拟
results_a = simulate("Scenario A (Delayed)", scenario_a_rewards)
results_b = simulate("Scenario B (Steady)", scenario_b_rewards)

# 输出统计结果
print("\n" + "="*50)
print(f"{'Level':<6} | {'Scenario A (Delayed)':<22} | {'Scenario B (Steady)':<20}")
print("-" * 50)
# 采样打印 (如果等级太多，只打印部分)
step = max(1, MAX_LEVELS // 10)
for i in range(0, MAX_LEVELS, step):
    a_count = results_a[i]
    b_count = results_b[i]
    print(f"{i+1:<6} | {a_count:<22} | {b_count:<20}")
# 确保打印最后一行
if MAX_LEVELS % step != 0:
    print(f"{MAX_LEVELS:<6} | {results_a[-1]:<22} | {results_b[-1]:<20}")

# ASCII 可视化 (哪怕没有 matplotlib 也能看)
print("\n[ASCII Visualization - Retention Trends]")
print("A = Scenario A, B = Scenario B")
for i in range(0, MAX_LEVELS, step):
    a_bar = "#" * (results_a[i] // 5)
    b_bar = "*" * (results_b[i] // 5)
    print(f"L{i+1:02} A: {a_bar:<20} ({results_a[i]})")
    print(f"    B: {b_bar:<20} ({results_b[i]})")

try:
    import matplotlib.pyplot as plt
    plt.figure(figsize=(12, 7))
    plt.plot(range(1, MAX_LEVELS + 1), results_a, label='Scenario A: Big Boss (Delayed)')
    plt.plot(range(1, MAX_LEVELS + 1), results_b, label='Scenario B: Breadcrumbs (Steady)')
    plt.title('Agent Retention Comparison: Delayed vs. Steady Rewards')
    plt.xlabel('Experience Level')
    plt.ylabel('Active Agents (out of 100)')
    plt.grid(True)
    plt.legend()
    plt.ylim(0, 105)
    plt.savefig('simulation_results.png')
    print("\n[Result] 模拟完成。详细图表已保存为 'simulation_results.png'。")
except ImportError:
    print("\n[Note] 未检测到 matplotlib，已跳过图片生成，请参考上方 ASCII 图表。")
except Exception as e:
    print(f"\n[Error] 绘图出错: {e}")