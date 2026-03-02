import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, GraduationCap, Briefcase, Archive, ChevronDown, Check, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { downloadResumeHtml, type ExportMode } from '../utils/resumeExport';
import styles from './ResumeExporter.module.css';

interface ExportOption {
    mode: ExportMode;
    icon: React.ReactNode;
    labelKey: string;
    descKey: string;
}

const exportOptions: ExportOption[] = [
    {
        mode: 'academic',
        icon: <GraduationCap size={18} />,
        labelKey: 'Export Academic',
        descKey: 'Export Academic Desc',
    },
    {
        mode: 'professional',
        icon: <Briefcase size={18} />,
        labelKey: 'Export Professional',
        descKey: 'Export Professional Desc',
    },
    {
        mode: 'full',
        icon: <Archive size={18} />,
        labelKey: 'Export Full',
        descKey: 'Export Full Desc',
    },
];

const ResumeExporter: React.FC = () => {
    const { language, t, supportedLanguages, setLanguage: _setLang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [exportLang, setExportLang] = useState(language);
    const [showLangPicker, setShowLangPicker] = useState(false);
    const [exportingMode, setExportingMode] = useState<ExportMode | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                setShowLangPicker(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Sync export language with site language
    useEffect(() => {
        setExportLang(language);
    }, [language]);

    const handleExport = async (mode: ExportMode) => {
        setExportingMode(mode);

        // Small delay to show animation
        await new Promise(resolve => setTimeout(resolve, 300));

        try {
            downloadResumeHtml({ mode, language: exportLang });
        } catch (err) {
            console.error('Export failed:', err);
        }

        setTimeout(() => {
            setExportingMode(null);
            setIsOpen(false);
        }, 600);
    };

    const currentLangLabel = supportedLanguages.find(l => l.code === exportLang)?.label || exportLang;

    return (
        <div className={styles.exporterWrapper} ref={dropdownRef}>
            <motion.button
                className={styles.exportButton}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
            >
                <Download size={16} />
                <span>{t('Export Resume')}</span>
                <ChevronDown
                    size={14}
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.dropdown}
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                        {/* Language Selector */}
                        <div className={styles.langSection}>
                            <button
                                className={styles.langToggle}
                                onClick={() => setShowLangPicker(!showLangPicker)}
                            >
                                <Globe size={14} />
                                <span>{currentLangLabel}</span>
                                <ChevronDown
                                    size={12}
                                    className={`${styles.chevronSmall} ${showLangPicker ? styles.chevronOpen : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {showLangPicker && (
                                    <motion.div
                                        className={styles.langOptions}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        {supportedLanguages.map(lang => (
                                            <button
                                                key={lang.code}
                                                className={`${styles.langOption} ${exportLang === lang.code ? styles.langActive : ''}`}
                                                onClick={() => {
                                                    setExportLang(lang.code);
                                                    setShowLangPicker(false);
                                                }}
                                            >
                                                {exportLang === lang.code && <Check size={12} />}
                                                <span>{lang.label}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className={styles.divider} />

                        {/* Export Options */}
                        {exportOptions.map(opt => (
                            <motion.button
                                key={opt.mode}
                                className={`${styles.exportOption} ${exportingMode === opt.mode ? styles.exporting : ''}`}
                                onClick={() => handleExport(opt.mode)}
                                whileHover={{ x: 3 }}
                                disabled={exportingMode !== null}
                            >
                                <div className={styles.optionIcon}>
                                    {exportingMode === opt.mode ? (
                                        <motion.div
                                            className={styles.checkmark}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 400 }}
                                        >
                                            <Check size={16} />
                                        </motion.div>
                                    ) : (
                                        opt.icon
                                    )}
                                </div>
                                <div className={styles.optionText}>
                                    <span className={styles.optionLabel}>{t(opt.labelKey)}</span>
                                    <span className={styles.optionDesc}>{t(opt.descKey)}</span>
                                </div>
                                <FileText size={14} className={styles.optionFileIcon} />
                            </motion.button>
                        ))}

                        <div className={styles.dropdownFooter}>
                            {t('Export Format Note')}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ResumeExporter;
