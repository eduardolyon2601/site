import React from 'react';
import { X, FileText } from 'lucide-react';

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg rounded-2xl bg-neutral-900 border border-neutral-800 text-white p-6 sm:p-8 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-neutral-800 text-neutral-200">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <div className="text-sm text-neutral-300 leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <p className="font-medium text-amber-200/90 bg-amber-950/30 border border-amber-800/50 p-3 rounded-lg text-xs">
            [Notice: This document is ready for real operational terms.]
          </p>
          <div className="whitespace-pre-line text-neutral-300 text-xs sm:text-sm">
            {content}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
