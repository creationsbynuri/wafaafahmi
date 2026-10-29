import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function PriceCalculator() {
  const [selectedClass, setSelectedClass] = useState('b');
  const [practiceLessons, setPracticeLessons] = useState(20);
  const [specialLessons, setSpecialLessons] = useState(12);

  const prices = {
    b: {
      registration: 350,
      practice: 75,
      special: 75,
      theoryExam: 150,
      practiceExam: 200,
      app: 0,
    },
    a: {
      registration: 350,
      practice: 80,
      special: 80,
      theoryExam: 150,
      practiceExam: 230,
      app: 0,
    },
    am: {
      registration: 350,
      practice: 80,
      special: 0,
      theoryExam: 0,
      practiceExam: 0,
      app: 0,
    },
    be: {
      registration: 200,
      practice: 80,
      special: 80,
      theoryExam: 0,
      practiceExam: 200,
      app: 0,
    },
    b196: {
      registration: 899,
      practice: 0,
      special: 0,
      theoryExam: 0,
      practiceExam: 0,
      app: 0,
    },
  };

  const selectedPrices = prices[selectedClass as keyof typeof prices];

  const calculateTotal = () => {
    const registration = selectedPrices.registration;
    const practiceTotal = practiceLessons * selectedPrices.practice;
    const specialTotal = specialLessons * selectedPrices.special;
    const theoryExam = selectedPrices.theoryExam;
    const practiceExam = selectedPrices.practiceExam;
    const app = selectedPrices.app;

    return registration + practiceTotal + specialTotal + theoryExam + practiceExam + app;
  };

  const total = calculateTotal();

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-[#8B0000]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center">
          <Calculator size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-black uppercase text-[#1A1A1A]">
          Preisrechner
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
            Führerscheinklasse
          </label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent bg-white"
          >
            <option value="b">B / BA / B197 / BF17</option>
            <option value="a">A / A1 / A2</option>
            <option value="am">AM</option>
            <option value="be">BE / B96</option>
            <option value="b196">B196</option>
          </select>
        </div>

        {selectedClass !== 'b196' && (
          <>
            <div>
              <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                Anzahl Übungsfahrten (ca. {practiceLessons})
              </label>
              <input
                type="range"
                min="10"
                max="50"
                value={practiceLessons}
                onChange={(e) => setPracticeLessons(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8B0000]"
              />
              <div className="flex justify-between text-xs text-[#555555] mt-1">
                <span>10</span>
                <span>50</span>
              </div>
            </div>

            {selectedClass !== 'am' && (
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">
                  Anzahl Sonderfahrten (ca. {specialLessons})
                </label>
                <input
                  type="range"
                  min="12"
                  max="20"
                  value={specialLessons}
                  onChange={(e) => setSpecialLessons(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8B0000]"
                />
                <div className="flex justify-between text-xs text-[#555555] mt-1">
                  <span>12</span>
                  <span>20</span>
                </div>
              </div>
            )}
          </>
        )}

        <div className="border-t-2 border-gray-200 pt-6 mt-6">
          <h4 className="font-bold text-[#1A1A1A] mb-4">Kostenübersicht</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#555555]">Anmeldegebühr</span>
              <span className="font-semibold text-[#1A1A1A]">{selectedPrices.registration} €</span>
            </div>
            {selectedClass !== 'b196' && (
              <>
                <div className="flex justify-between">
                  <span className="text-[#555555]">Übungsfahrten ({practiceLessons} × {selectedPrices.practice} €)</span>
                  <span className="font-semibold text-[#1A1A1A]">{practiceLessons * selectedPrices.practice} €</span>
                </div>
                {selectedClass !== 'am' && (
                  <div className="flex justify-between">
                    <span className="text-[#555555]">Sonderfahrten ({specialLessons} × {selectedPrices.special} €)</span>
                    <span className="font-semibold text-[#1A1A1A]">{specialLessons * selectedPrices.special} €</span>
                  </div>
                )}
                {selectedPrices.theoryExam > 0 && (
                  <div className="flex justify-between">
                    <span className="text-[#555555]">Theorieprüfung</span>
                    <span className="font-semibold text-[#1A1A1A]">{selectedPrices.theoryExam} €</span>
                  </div>
                )}
                {selectedPrices.practiceExam > 0 && (
                  <div className="flex justify-between">
                    <span className="text-[#555555]">Praxisprüfung</span>
                    <span className="font-semibold text-[#1A1A1A]">{selectedPrices.practiceExam} €</span>
                  </div>
                )}
                {selectedPrices.app > 0 && (
                  <div className="flex justify-between">
                    <span className="text-[#555555]">Fahrschulcard App</span>
                    <span className="font-semibold text-[#1A1A1A]">{selectedPrices.app} €</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="bg-[#8B0000] text-white rounded-lg p-6 flex justify-between items-center">
          <span className="text-lg font-bold uppercase">Gesamtkosten ca.</span>
          <span className="text-3xl font-black">{total} €</span>
        </div>

        <p className="text-xs text-[#555555] text-center">
          * Dies ist eine Schätzung. Die tatsächlichen Kosten können je nach individuellen Bedürfnissen variieren. Prüfungsgebühren verstehen sich zzgl. TÜV-Gebühren.
        </p>
      </div>
    </div>
  );
}
