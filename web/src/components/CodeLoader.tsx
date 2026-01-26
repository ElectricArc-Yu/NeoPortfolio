import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeLoaderProps {
    src: string;
    language?: string;
}

const CodeLoader: React.FC<CodeLoaderProps> = ({ src, language }) => {
    const [code, setCode] = useState<string>('Loading code...');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCode = async () => {
            try {
                const response = await fetch(src);
                if (!response.ok) {
                    throw new Error(`Failed to load code from ${src}: ${response.statusText}`);
                }
                const text = await response.text();
                setCode(text);
            } catch (err: any) {
                setError(err.message);
                console.error(err);
            }
        };

        fetchCode();
    }, [src]);

    if (error) {
        return <div style={{ color: '#ff4d4f', padding: '1rem', border: '1px solid #ff4d4f', borderRadius: '4px', margin: '1rem 0' }}>Error: {error}</div>;
    }

    // Determine language from file extension if not provided
    const detectedLanguage = language || src.split('.').pop() || 'text';

    return (
        <SyntaxHighlighter
            style={vscDarkPlus}
            language={detectedLanguage}
            PreTag="div"
            customStyle={{
                margin: '1.5rem 0',
                borderRadius: '8px',
                fontSize: '0.9rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            codeTagProps={{
                style: {
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all'
                }
            }}
        >
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeLoader;
