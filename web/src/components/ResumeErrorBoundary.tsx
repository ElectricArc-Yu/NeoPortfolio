import React, { Component, type ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import styles from './ResumeErrorBoundary.module.css';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

export default class ResumeErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
            errorInfo: null
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Resume Error Boundary caught an error:', error);
        console.error('Error Info:', errorInfo);

        this.setState({
            error,
            errorInfo
        });

        // Log to external service if available
        const globalWindow = globalThis as typeof globalThis & { gtag?: (...args: unknown[]) => void };
        if (globalWindow.gtag) {
            globalWindow.gtag('event', 'exception', {
                description: error.toString(),
                fatal: false
            });
        }
    }

    handleRetry = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className={styles.errorContainer}>
                    <div className={styles.errorContent}>
                        <AlertCircle className={styles.errorIcon} size={48} />
                        <h2 className={styles.errorTitle}>页面加载失败</h2>
                        <p className={styles.errorMessage}>
                            抱歉，简历页面加载时遇到了问题。请尝试刷新页面或联系支持。
                        </p>
                        {this.state.error && (
                            <details className={styles.errorDetails}>
                                <summary>错误详情</summary>
                                <pre className={styles.errorStack}>
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </details>
                        )}
                        <button
                            className={styles.retryButton}
                            onClick={this.handleRetry}
                        >
                            <RefreshCw size={16} />
                            重试
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}