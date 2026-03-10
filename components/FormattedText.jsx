import React from 'react';

const FormattedText = ({ content, className = "text-slate-600" }) => {
    if (!content) return null;

    // Helper to parse bold markers (*text*)
    const renderLineContent = (text) => {
        const parts = text.split(/(\*.*?\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('*') && part.endsWith('*')) {
                return <strong key={i} className="font-black text-inherit opacity-100">{part.slice(1, -1)}</strong>;
            }
            return part;
        });
    };

    // Split by newline and filter out empty strings
    const lines = content.split('\n').map(line => line.trim()).filter(line => line !== "");

    return (
        <div className={`space-y-4 ${className}`}>
            {lines.map((line, index) => {
                // Check if the line starts with a number followed by a dot (e.g., "1. ")
                const isNumbered = /^\d+\.\s/.test(line);
                // Check if it starts with a dash or bullet (e.g., "- " or "* ")
                const isBulleted = /^[-*]\s/.test(line);

                if (isNumbered || isBulleted) {
                    return (
                        <div key={index} className="flex gap-3">
                            <span className="shrink-0 font-bold text-orange-500">
                                {isNumbered ? line.split('.')[0] + '.' : '•'}
                            </span>
                            <span className="leading-relaxed">
                                {renderLineContent(line.replace(/^\d+\.\s|[-*]\s/, ''))}
                            </span>
                        </div>
                    );
                }

                return (
                    <p key={index} className="text-lg leading-relaxed">
                        {renderLineContent(line)}
                    </p>
                );
            })}
        </div>
    );
};

export default FormattedText;
