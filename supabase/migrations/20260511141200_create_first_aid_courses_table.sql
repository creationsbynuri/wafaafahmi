/*
  # Create first_aid_courses table

  1. New Tables
    - `first_aid_courses`
      - `id` (uuid, primary key)
      - `date` (date, not null) - the date of the course
      - `time` (text, not null) - display time e.g. "11:00 Uhr"
      - `location` (text, not null) - location description
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `first_aid_courses` table
    - Add policy for public read access (course dates are public info)
    - Add policy for authenticated insert/update/delete (admin management)

  3. Notes
    - This table stores upcoming first-aid course dates
    - The frontend filters out past dates automatically
    - When no future dates exist, a placeholder is shown
*/

CREATE TABLE IF NOT EXISTS first_aid_courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  time text NOT NULL DEFAULT '11:00 Uhr',
  location text NOT NULL DEFAULT 'Bei uns in der Fahrschule · Hochheimer Straße 1, Mainz-Kastel',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE first_aid_courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view first aid course dates"
  ON first_aid_courses
  FOR SELECT
  TO anon, authenticated
  USING (date >= CURRENT_DATE);

CREATE POLICY "Authenticated users can insert first aid courses"
  ON first_aid_courses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update first aid courses"
  ON first_aid_courses
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete first aid courses"
  ON first_aid_courses
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);
