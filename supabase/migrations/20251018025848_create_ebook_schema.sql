/*
  # Create Digital Logic Design Ebook Schema

  1. New Tables
    - `units`
      - `id` (uuid, primary key)
      - `unit_number` (integer, unique)
      - `title` (text)
      - `hours` (integer)
      - `description` (text)
      - `created_at` (timestamptz)
    
    - `topics`
      - `id` (uuid, primary key)
      - `unit_id` (uuid, foreign key to units)
      - `title` (text)
      - `content` (text)
      - `examples` (jsonb)
      - `order` (integer)
      - `created_at` (timestamptz)
    
    - `pdf_notes`
      - `id` (uuid, primary key)
      - `unit_id` (uuid, foreign key to units)
      - `title` (text)
      - `file_url` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (educational content)
*/

CREATE TABLE IF NOT EXISTS units (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_number integer UNIQUE NOT NULL,
  title text NOT NULL,
  hours integer NOT NULL DEFAULT 0,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id uuid REFERENCES units(id) ON DELETE CASCADE,
  title text NOT NULL,
  content text NOT NULL DEFAULT '',
  examples jsonb DEFAULT '[]'::jsonb,
  order_num integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS pdf_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id uuid REFERENCES units(id) ON DELETE CASCADE,
  title text NOT NULL,
  file_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE units ENABLE ROW LEVEL SECURITY;
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE pdf_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view units"
  ON units FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view topics"
  ON topics FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view pdf_notes"
  ON pdf_notes FOR SELECT
  TO anon, authenticated
  USING (true);