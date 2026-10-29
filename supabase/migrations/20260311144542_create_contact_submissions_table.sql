/*
  # Create contact_submissions table

  ## Overview
  This migration creates a table to store contact form submissions from the website.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key) - Unique identifier for each submission
    - `name` (text) - Name of the person submitting the form
    - `email` (text) - Email address of the submitter
    - `phone` (text, nullable) - Optional phone number
    - `message` (text) - The message content
    - `created_at` (timestamptz) - Timestamp when the submission was created
    - `read` (boolean) - Whether the submission has been read by admin

  ## Security
  - Enable RLS on `contact_submissions` table
  - Add policy for public inserts (anyone can submit a contact form)
  - Only authenticated users (admin) can read submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
