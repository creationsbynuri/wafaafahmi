import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Wie alt muss ich sein, um mit der Ausbildung zu beginnen?',
    answer: 'Du kannst mit der theoretischen Ausbildung 3 Monate vor dem Mindestalter beginnen. Die Theorieprüfung ist 3 Monate und die praktische Prüfung 1 Monat vor dem Mindestalter möglich. Für Klasse B ist das Mindestalter 18 Jahre (17 bei begleitetem Fahren).',
  },
  {
    question: 'Wie lange dauert die Führerscheinausbildung?',
    answer: 'Die Dauer variiert je nach individuellen Fortschritten. Im Durchschnitt dauert es 3–6 Monate. Bei intensiver Ausbildung kann es auch schneller gehen. Die Mindestanzahl an Theorie- und Praxisstunden ist gesetzlich vorgeschrieben.',
  },
  {
    question: 'Welche Unterlagen brauche ich für die Anmeldung?',
    answer: 'Für die Anmeldung benötigst du: Personalausweis oder Reisepass mit Meldebescheinigung, ein biometrisches Passfoto, einen Sehtest (nicht älter als 2 Jahre), einen Erste-Hilfe-Kurs-Nachweis und bei Ersterteilung eine Karteikartenabschrift vom Einwohnermeldeamt.',
  },
  {
    question: 'Wie viele Fahrstunden brauche ich?',
    answer: 'Die Anzahl der Fahrstunden ist individuell verschieden. Es gibt gesetzlich vorgeschriebene Sonderfahrten (12 für Klasse B: 5× Überland, 4× Autobahn, 3× Nachtfahrt). Zusätzlich sind Übungsfahrten notwendig, deren Anzahl von deinen Fähigkeiten abhängt. Im Durchschnitt benötigen Fahrschüler 20–30 Fahrstunden.',
  },
  {
    question: 'Was ist in der Anmeldegebühr enthalten?',
    answer: 'Die Anmeldegebühr beinhaltet: den gesamten theoretischen Unterricht (alle Grundstoff- und Zusatzstunden), Verwaltungskosten, Lernmaterialien und die Fahrschulcard-App für die Theorieprüfungsvorbereitung.',
  },
  {
    question: 'Kann ich Fahrstunden auch kurzfristig absagen?',
    answer: 'Fahrstunden können bis 48 Stunden vor dem Termin kostenfrei abgesagt werden. Bei späterer Absage wird die volle Fahrstunde berechnet. Bei Verhinderung durch Krankheit mit ärztlichem Attest kann eine Ausnahme gemacht werden.',
  },
  {
    question: 'Welche Zahlungsmöglichkeiten gibt es?',
    answer: 'Wir akzeptieren Barzahlung, Überweisung und Ratenzahlung nach Absprache. Die Anmeldegebühr ist bei der Anmeldung fällig, Fahrstunden können fortlaufend bezahlt werden.',
  },
  {
    question: 'Was passiert, wenn ich durch die Prüfung falle?',
    answer: 'Solltest du durch eine Prüfung fallen, können wir einen neuen Prüfungstermin vereinbaren. Es entstehen erneut Kosten für die Vorstellung zur Prüfung sowie TÜV-Gebühren. Bei Bedarf bieten wir zusätzliche Fahrstunden zur Vorbereitung an.',
  },
  {
    question: 'Bietet ihr auch Automatik-Ausbildung an?',
    answer: 'Ja, wir bieten Ausbildungen sowohl auf Schaltgetriebe als auch auf Automatikgetriebe an. Bei der Automatik-Ausbildung kannst du zusätzlich die B197-Regelung nutzen, um mit 10 zusätzlichen Schaltstunden auch Schaltfahrzeuge fahren zu dürfen.',
  },
  {
    question: 'Kann ich Fahrstunden auch am Wochenende machen?',
    answer: 'Ja, nach Absprache sind Fahrstunden auch samstags möglich. Sonntags finden keine regulären Fahrstunden statt, außer bei besonderen Vereinbarungen wie Intensivkursen.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-[#8B0000]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center">
          <HelpCircle size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-black uppercase text-[#1A1A1A]">
          Häufig gestellte Fragen
        </h3>
      </div>

      <div className="space-y-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#8B0000] transition-colors"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors text-left"
            >
              <span className="font-bold text-[#1A1A1A] pr-4">{item.question}</span>
              <ChevronDown
                size={20}
                className={`text-[#8B0000] flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-[#555555] leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-[#FFF5F5] rounded-lg border-l-4 border-[#8B0000]">
        <p className="text-[#555555]">
          <span className="font-bold text-[#1A1A1A]">Weitere Fragen?</span>
          <br />
          Ruf uns an unter <a href="tel:+491785499459" className="text-[#8B0000] font-bold hover:underline">+49 (0) 178 54 99 459</a> oder
          schreib uns auf <a href="https://wa.me/491785499459" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] font-bold hover:underline">WhatsApp</a>.
        </p>
      </div>
    </div>
  );
}
