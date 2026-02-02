import React from 'react';
import styles from './ResumeSkeleton.module.css';
import { motion } from 'framer-motion';

const ResumeSkeleton: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Header Skeleton */}
            <div className={styles.header}>
                <div className={styles.nameSkeleton} />
                <div className={styles.subtitleSkeleton} />
                <div className={styles.aboutSkeleton} />
                <div className={styles.contactInfo}>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className={styles.contactItem}>
                            <div className={styles.iconSkeleton} />
                            <div className={styles.textSkeleton} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Grid Skeleton */}
            <div className={styles.mainGrid}>
                {/* Experience Column */}
                <div className={styles.primaryColumn}>
                    <div className={styles.section}>
                        <div className={styles.sectionTitleSkeleton} />
                        <div className={styles.timeline}>
                            {[1, 2, 3].map(i => (
                                <div key={i} className={styles.timelineItem}>
                                    <div className={styles.timelineDotSkeleton} />
                                    <div className={styles.timelineContent}>
                                        <div className={styles.roleHeader}>
                                            <div className={styles.roleSkeleton} />
                                            <div className={styles.periodSkeleton} />
                                        </div>
                                        <div className={styles.companyRow}>
                                            <div className={styles.companySkeleton} />
                                            <div className={styles.sizeSkeleton} />
                                        </div>
                                        <div className={styles.details}>
                                            {[1, 2, 3].map(j => (
                                                <div key={j} className={styles.detailSkeleton} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills & Education Column */}
                <div className={styles.secondaryColumn}>
                    {/* Skills Section */}
                    <div className={styles.section}>
                        <div className={styles.sectionTitleSkeleton} />
                        <div className={styles.skillsList}>
                            {[1, 2, 3].map(i => (
                                <div key={i} className={styles.skillCategory}>
                                    <div className={styles.categoryTitleSkeleton} />
                                    <div className={styles.skillList}>
                                        {[1, 2, 3, 4, 5].map(j => (
                                            <div key={j} className={styles.skillItemSkeleton} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className={styles.section}>
                        <div className={styles.sectionTitleSkeleton} />
                        <div className={styles.educationList}>
                            {[1, 2].map(i => (
                                <div key={i} className={styles.educationItem}>
                                    <div className={styles.schoolSkeleton} />
                                    <div className={styles.degreeSkeleton} />
                                    <div className={styles.periodSkeletonShort} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <div className={styles.actions}>
                <div className={styles.buttonSkeleton} />
            </div>

            {/* Certifications Section */}
            <div className={styles.section}>
                <div className={styles.sectionTitleSkeleton} />
                <div className={styles.certificationsList}>
                    {[1, 2, 3].map(i => (
                        <div key={i} className={styles.certItem}>
                            <div className={styles.certIconSkeleton} />
                            <div className={styles.certContent}>
                                <div className={styles.certTitleSkeleton} />
                                <div className={styles.certDateSkeleton} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Timeline Section */}
            <div className={styles.section}>
                <div className={styles.timelineHeader}>
                    <div className={styles.sectionTitleSkeleton} />
                    <div className={styles.filterGroup}>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={styles.filterButtonSkeleton} />
                        ))}
                    </div>
                </div>
                <div className={styles.projectTimeline}>
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={styles.projectRow}>
                            <div className={styles.projectDateSkeleton} />
                            <div className={styles.projectTitleSkeleton} />
                            <div className={styles.projectBadges}>
                                <div className={styles.badgeSkeleton} />
                                <div className={styles.badgeSkeleton} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResumeSkeleton;