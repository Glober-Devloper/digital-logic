import { useState } from 'react';
import { Download, BookOpen } from 'lucide-react';
import Unit1Content from './units/Unit1Content';
import Unit2Content from './units/Unit2Content';
import Unit3Content from './units/Unit3Content';
import Unit4Content from './units/Unit4Content';

interface UnitPageProps {
  unitNumber: number;
}

export default function UnitPage({ unitNumber }: UnitPageProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleDownloadPDF = () => {
    const content = document.getElementById('unit-content');
    if (!content) return;

    const printWindow = window.open('', '', 'height=600,width=800');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Unit ${unitNumber} - Digital Logic Design</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
            h1 { color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px; }
            h2 { color: #2563eb; margin-top: 30px; }
            h3 { color: #3b82f6; margin-top: 20px; }
            .example { background: #f3f4f6; padding: 15px; border-left: 4px solid #3b82f6; margin: 15px 0; }
            .code { background: #1f2937; color: #f9fafb; padding: 15px; border-radius: 5px; font-family: monospace; }
            table { border-collapse: collapse; width: 100%; margin: 15px 0; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background: #3b82f6; color: white; }
          </style>
        </head>
        <body>
          ${content.innerHTML}
          <script>window.print(); window.close();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const unitInfo = {
    1: { title: 'Data Representation', hours: 10, color: 'blue' },
    2: { title: 'Digital Logic Circuits', hours: 10, color: 'green' },
    3: { title: 'Combinational Circuits and Flip-Flops', hours: 15, color: 'orange' },
    4: { title: 'Digital Components', hours: 25, color: 'purple' },
  };

  const info = unitInfo[unitNumber as keyof typeof unitInfo];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className={`bg-gradient-to-r from-${info.color}-500 to-${info.color}-600 p-8 text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-8 h-8" />
                  <span className="text-sm font-semibold opacity-90">UNIT {unitNumber}</span>
                </div>
                <h1 className="text-4xl font-bold mb-2">{info.title}</h1>
                <p className="text-lg opacity-90">{info.hours} Hours of Content</p>
              </div>
              <button
                onClick={handleDownloadPDF}
                className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        <div id="unit-content" className="bg-white rounded-2xl shadow-lg p-8">
          {unitNumber === 1 && <Unit1Content expandedSections={expandedSections} toggleSection={toggleSection} />}
          {unitNumber === 2 && <Unit2Content expandedSections={expandedSections} toggleSection={toggleSection} />}
          {unitNumber === 3 && <Unit3Content expandedSections={expandedSections} toggleSection={toggleSection} />}
          {unitNumber === 4 && <Unit4Content expandedSections={expandedSections} toggleSection={toggleSection} />}
        </div>
      </div>
    </div>
  );
}
