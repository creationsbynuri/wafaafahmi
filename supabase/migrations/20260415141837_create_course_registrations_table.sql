/*
  # Create course_registrations table

  ## Summary
  Allows website visitors to register for the Theorie-Intensivkurs sessions.

  ## New Tables
  - `course_registrations`
    - `id` (uuid, primary key)
    - `name` (text) - full name of participant
    - `email` (text) - contact email
    - `phone` (text) - contact phone number
    - `course_date` (text) - which course date they want to register for
    - `message` (text, nullable) - optional message
    - `created_at` (timestamptz) - submission timestamp

  ## Security
  - RLS enabled on `course_registrations`
  - INSERT allowed for anonymous users (public registration form)
  - SELECT restricted to authenticated users only (admin access)
*/

CREATE TABLE IF NOT EXISTS course_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL DEFAULT '',
  course_date text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE course_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for a course"
  ON course_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view registrations"
  ON course_registrations
  FOR SELECT
  TO authenticated
  USING (true);
