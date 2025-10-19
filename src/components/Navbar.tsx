import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigate: (unitNumber: number | null) => void;
  currentUnit: number | null;
}

export default function Navbar({ onNavigate, currentUnit }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const units = [
    { number: 1, title: 'Data Representation' },
    { number: 2, title: 'Digital Logic Circuits' },
    { number: 3, title: 'Combinational Circuits' },
    { number: 4, title: 'Digital Components' },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onNavigate(null)}
          >
            <BookOpen className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold">Digital Logic Design</h1>
              <p className="text-xs text-gray-300">Complete eBook with Examples</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {units.map((unit) => (
              <button
                key={unit.number}
                onClick={() => onNavigate(unit.number)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentUnit === unit.number
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-slate-700 text-gray-200'
                }`}
              >
                Unit {unit.number}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          {units.map((unit) => (
            <button
              key={unit.number}
              onClick={() => {
                onNavigate(unit.number);
                setIsMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 border-b border-slate-700 transition-colors ${
                currentUnit === unit.number
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-slate-700 text-gray-200'
              }`}
            >
              Unit {unit.number}: {unit.title}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
