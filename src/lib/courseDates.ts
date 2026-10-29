interface CourseDate {
  value: string;
  label: string;
  date?: string;
}

const ALL_COURSE_DATES: CourseDate[] = [
  { value: '15.01.2027', label: '15. Januar 2027 – Lektion 1 & 2', date: '2027-01-15' },
  { value: '18.01.2027', label: '18. Januar 2027 – Lektion 3 & 4', date: '2027-01-18' },
  { value: '19.01.2027', label: '19. Januar 2027 – Lektion 5 & 6', date: '2027-01-19' },
  { value: '20.01.2027', label: '20. Januar 2027 – Lektion 7 & 8', date: '2027-01-20' },
  { value: '21.01.2027', label: '21. Januar 2027 – Lektion 9 & 10', date: '2027-01-21' },
  { value: '22.01.2027', label: '22. Januar 2027 – Lektion 11 & 12', date: '2027-01-22' },
  { value: '25.01.2027', label: '25. Januar 2027 – PKW / Lektion B1 & B2', date: '2027-01-25' },
  { value: 'Komplettkurs', label: 'Komplettkurs (alle Januar-Termine)' },
];

export function getAvailableCourseDates(): CourseDate[] {
  const today = new Date().toISOString().split('T')[0];
  return ALL_COURSE_DATES.filter((d) => !d.date || d.date >= today);
}

export const COURSE_DATES = ALL_COURSE_DATES;
