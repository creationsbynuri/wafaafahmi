interface CourseDate {
  value: string;
  label: string;
  date?: string;
  soldOut?: boolean;
}

const ALL_COURSE_DATES: CourseDate[] = [
  { value: '15.01.2027', label: '15. Januar 2027 – Lektion 1 & 2', date: '2027-01-15', soldOut: true },
  { value: '18.01.2027', label: '18. Januar 2027 – Lektion 3 & 4', date: '2027-01-18', soldOut: true },
  { value: '19.01.2027', label: '19. Januar 2027 – Lektion 5 & 6', date: '2027-01-19', soldOut: true },
  { value: '20.01.2027', label: '20. Januar 2027 – Lektion 7 & 8', date: '2027-01-20', soldOut: true },
  { value: '21.01.2027', label: '21. Januar 2027 – Lektion 9 & 10', date: '2027-01-21', soldOut: true },
  { value: '22.01.2027', label: '22. Januar 2027 – Lektion 11 & 12', date: '2027-01-22', soldOut: true },
  { value: '25.01.2027', label: '25. Januar 2027 – PKW / Lektion B1 & B2', date: '2027-01-25', soldOut: true },
  { value: 'Komplettkurs', label: 'Komplettkurs (alle Januar-Termine)', soldOut: true },
];

export function getAvailableCourseDates(): CourseDate[] {
  const today = new Date().toISOString().split('T')[0];
  return ALL_COURSE_DATES.filter((d) => !d.soldOut && (!d.date || d.date >= today));
}

export const COURSE_DATES = ALL_COURSE_DATES;
