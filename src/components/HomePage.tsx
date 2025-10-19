import { BookOpen, Clock, FileText, Download } from 'lucide-react';

interface HomePageProps {
  onNavigate: (unitNumber: number) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const units = [
    {
      number: 1,
      title: 'Data Representation',
      hours: 10,
      topics: [
        'Number Systems (Binary, Octal, Decimal, Hexadecimal)',
        'Binary Arithmetic Operations',
        'Fixed-Point Number Representation',
        'Floating-Point Number Representation',
        'Character Encoding (ASCII, Unicode, UTF, etc.)',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: 2,
      title: 'Digital Logic Circuits',
      hours: 10,
      topics: [
        'Logic Gates (AND, OR, NOT, NAND, NOR, XOR, XNOR)',
        'Boolean Algebra Fundamentals',
        'De-Morgan\'s Theorem',
        'Boolean Expression Simplification',
        'Canonical Forms (SOP and POS)',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      number: 3,
      title: 'Combinational Circuits and Flip-Flops',
      hours: 15,
      topics: [
        'Half Adder and Full Adder',
        'Parallel and Serial Adders',
        'SR, D, JK, and T Flip-Flops',
        'Master-Slave Flip-Flops',
        'Timing Diagrams',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      number: 4,
      title: 'Digital Components',
      hours: 25,
      topics: [
        'Integrated Circuits (IC Types)',
        'Encoders and Decoders',
        'Multiplexers and Demultiplexers',
        'Registers (SISO, SIPO, PISO, PIPO)',
        'Binary Counters (Asynchronous & Synchronous)',
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl">
              <BookOpen className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Digital Logic Design
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive eBook covering all fundamental concepts of Digital Logic Design
            with detailed examples, diagrams, and downloadable PDF notes for each unit.
          </p>
          <div className="mt-8 flex justify-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">4 Units</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">60 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">PDF Downloads</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {units.map((unit) => (
            <div
              key={unit.number}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
              onClick={() => onNavigate(unit.number)}
            >
              <div className={`h-3 bg-gradient-to-r ${unit.color}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">
                      UNIT {unit.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {unit.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{unit.hours}h</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {unit.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 bg-gradient-to-r ${unit.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                >
                  Explore Unit {unit.number}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Each unit contains detailed explanations, step-by-step examples, interactive diagrams,
            and downloadable PDF notes to help you master Digital Logic Design.
          </p>
        </div>
      </div>
    </div>
  );
}
