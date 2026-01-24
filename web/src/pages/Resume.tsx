import React from 'react';
import { resumeData } from '../data/resume';
import { useLanguage } from '../context/LanguageContext';
import styles from './Resume.module.css';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Resume: React.FC = () => {
    const { language, t } = useLanguage();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.name}>{resumeData.header.name}</h1>
                <p className={styles.subtitle}>{resumeData.header.role}</p>

                {/* About Me Section in Header */}
                <p className={styles.about}>
                    {language === 'CN' ? resumeData.about.cn : resumeData.about.en}
                </p>

                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <Mail size={16} />
                        <a href={`mailto:${resumeData.header.email}`}>{resumeData.header.email}</a>
                    </div>
                    {resumeData.header.phone && (
                        <div className={styles.contactItem}>
                            <Phone size={16} />
                            <a href={`tel:${resumeData.header.phone.replace(/\s+/g, '')}`}>{resumeData.header.phone}</a>
                        </div>
                    )}
                    <div className={styles.contactItem}>
                        <Github size={16} />
                        <a href={resumeData.header.links.find(l => l.label === 'GitHub')?.url} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div className={styles.contactItem}>
                        <Linkedin size={16} />
                        <a href={resumeData.header.links.find(l => l.label === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </header>

            <div className={styles.mainGrid}>
                <div className={styles.primaryColumn}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t('Experience')}</h2>
                        <div className={styles.timeline}>
                            {resumeData.experience.map((job, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.timelineDot} />
                                    <div className={styles.jobHeader}>
                                        <div className={styles.roleHeader}>
                                            <h3 className={styles.jobRole}>
                                                {language === 'CN' ? job.roleCN : job.roleEN}
                                            </h3>
                                            <span className={styles.period}>{job.period}</span>
                                        </div>
                                        <div className={styles.companyRow}>
                                            <span className={styles.company}>
                                                {language === 'CN' ? job.companyCN : job.companyEN}
                                            </span>
                                            <span className={styles.companySize}>
                                                {language === 'CN' ? job.sizeCN : job.sizeEN}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className={styles.details}>
                                        {(language === 'CN' ? job.detailsCN : job.detailsEN).map((point, idx) => (
                                            <li key={idx}>
                                                <div className={styles.pointContent}>{point}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className={styles.secondaryColumn}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t('Skills')}</h2>
                        <div className={styles.skillsList}>
                            {resumeData.skills.map((skillGroup, index) => (
                                <div key={index} className={styles.skillCategory}>
                                    <h3 className={styles.categoryTitle}>
                                        {language === 'CN' ? skillGroup.categoryCN : skillGroup.category}
                                    </h3>
                                    <div className={styles.skillTags}>
                                        {skillGroup.items.map((item, idx) => (
                                            <span key={idx} className={styles.skillTag}>{item}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t('Education')}</h2>
                        <div className={styles.educationList}>
                            {resumeData.education.map((edu, index) => (
                                <div key={index} className={styles.educationItem}>
                                    <h3 className={styles.schoolName}>
                                        {language === 'CN' ? edu.schoolCN : edu.schoolEN}
                                    </h3>
                                    <p className={styles.degree}>
                                        {language === 'CN' ? edu.degreeCN : edu.degreeEN}
                                    </p>
                                    <div className={styles.eduMeta}>
                                        <span className={styles.period}>{edu.period}</span>
                                        {edu.gpa && <span className={styles.gpa}>GPA: {edu.gpa}</span>}
                                    </div>
                                    {edu.awards && edu.awards.length > 0 && (
                                        <div className={styles.awards}>
                                            {edu.awards.map((award, idx) => (
                                                <div key={idx} className={styles.awardItem}>🏆 {award}</div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <div className={styles.actions}>
                <a
                    className={styles.pdfButton}
                    href="mailto:YuChenhaoran@Preludegames.com"
                >
                    <Send size={18} />
                    {language === 'CN' ? '立即联系' : 'Contact Now'}
                </a>
            </div>
        </div>
    );
};

export default Resume;
