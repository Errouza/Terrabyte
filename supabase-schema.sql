-- ====================================================================
-- TERRABYTE GEOSYSTEMS - SUPABASE DATABASE INITIALIZATION SCRIPT
-- ====================================================================
-- Jalankan skrip SQL ini di Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ====================================================================

-- 1. TABEL: PRODUCTS
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  code TEXT,
  tag TEXT,
  category TEXT,
  name TEXT NOT NULL,
  summary TEXT,
  img TEXT,
  status TEXT DEFAULT 'In Field Deployment',
  specs JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABEL: ARTICLES
CREATE TABLE IF NOT EXISTS public.articles (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  category TEXT DEFAULT 'Articles',
  published_at TEXT,
  read_time TEXT DEFAULT '4',
  main_image TEXT,
  author JSONB DEFAULT '{"name": "Terrabyte Team", "role": "Specialist"}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TABEL: INQUIRIES (PESAN FORM KONTAK)
CREATE TABLE IF NOT EXISTS public.inquiries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  domain TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  source TEXT DEFAULT 'Web Contact Form',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- AKTIFKAN ROW LEVEL SECURITY (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- POLICIES (HAK AKSES)
DROP POLICY IF EXISTS "Public read products" ON public.products;
CREATE POLICY "Public read products" ON public.products FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read articles" ON public.articles;
CREATE POLICY "Public read articles" ON public.articles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public insert inquiries" ON public.inquiries;
CREATE POLICY "Public insert inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Service role all products" ON public.products;
CREATE POLICY "Service role all products" ON public.products FOR ALL USING (true);

DROP POLICY IF EXISTS "Service role all articles" ON public.articles;
CREATE POLICY "Service role all articles" ON public.articles FOR ALL USING (true);

DROP POLICY IF EXISTS "Service role all inquiries" ON public.inquiries;
CREATE POLICY "Service role all inquiries" ON public.inquiries FOR ALL USING (true);

-- SEED DATA: PRODUK RESMI TERRABYTE
INSERT INTO public.products (id, code, tag, category, name, summary, img, status, specs, updated_at)
VALUES
  (
    'prod-radar-sar5000',
    'RADAR-MS-SAR5000',
    'Hardware Radar // Principal ComNav (via Lextera)',
    'radar',
    'ComNav MS-SAR5000 Ground-Based Slope Stability Radar',
    'Radar berpresisi tinggi tipe Ground-Based Synthetic Aperture Radar (GB-SAR) dari principal ComNav yang dihadirkan melalui Lextera untuk monitoring stabilitas lereng tambang dan deformasi dinding batuan secara kontinu hingga radius 5 km.',
    'https://xbadzroazjblacumvnpq.supabase.co/storage/v1/object/public/uploads/sar5000.png',
    'In Field Deployment',
    '[
      ["Tipe Radar", "Ground-Based Synthetic Aperture Radar (GB-SAR)"],
      ["Akurasi Pengukuran", "Sub-milimeter (Hingga 0.1 mm deteksi pergeseran)"],
      ["Jangkauan Pantau", "Radius hingga 5.000 meter (5 km coverage)"],
      ["Siklus Pemindaian", "< 2 menit per siklus pemindaian penuh"],
      ["Ketahanan Lingkungan", "IP67 All-Weather (Kondisi Hujan, Kabut, Debu Tambang)"],
      ["Integrasi Perangkat", "Didukung langsung oleh platform TerraPulse"]
    ]'::jsonb,
    NOW()
  ),
  (
    'prod-laser-rtk-n2',
    'COMNAV-N2-PALM',
    'Laser RTK // Principal ComNav (via Lextera)',
    'laser-rtk',
    'ComNav N2 Palm GNSS / Laser RTK Receiver',
    'Receiver GNSS saku ultra-ringan dengan modul laser EDM terintegrasi untuk pengukuran titik tersembunyi/berbahaya tanpa jangkauan jalon pole, dilengkapi kamera AR visual stakeout dan kompensasi tilt IMU hingga 60°.',
    'https://xbadzroazjblacumvnpq.supabase.co/storage/v1/object/public/uploads/n2.png',
    'Available in Stock',
    '[
      ["Kanal Pelacakan", "1.408 Kanal Multi-Konstelasi (GPS, BDS, GLO, GAL)"],
      ["Modul Laser EDM", "Pengukuran Jarak Laser Presisi Sub-Sentimeter Tanpa Pole"],
      ["Kompensasi Kemiringan", "IMU Bebas Kalibrasi hingga Kemiringan 60°"],
      ["Visual AR Stakeout", "Kamera Visual HD untuk Panduan Stakeout Real-Time"],
      ["Bobot & Portabilitas", "Hanya 170g — Ukuran Saku Ultra-Ringan"],
      ["Proteksi Lapangan", "IP68 Alloy Tahan Air & Jatuh 2 Meter"]
    ]'::jsonb,
    NOW()
  ),
  (
    'prod-t20-gnss',
    'COMNAV-T20-GNSS',
    'GNSS Receiver // High Precision',
    'gnss',
    'ComNav T20 Multi-Constellation GNSS Receiver',
    'Receiver GNSS cerdas generasi baru dengan teknologi tracking satelit generasi mutakhir, radio UHF internal multi-protokol, dan IMU generasi ke-3 untuk efisiensi survei topografi dan geodetik lapangan.',
    'https://xbadzroazjblacumvnpq.supabase.co/storage/v1/object/public/uploads/t20.png',
    'In Active Production',
    '[
      ["Channels", "1.408 Saluran Pelacakan Semua Konstelasi"],
      ["RTK Accuracy", "Horizontal: 8 mm + 1 ppm, Vertikal: 15 mm + 1 ppm"],
      ["Tilt Survey", "IMU 60° bebas kalibrasi tanpa terganggu medan magnet"],
      ["Konektivitas", "Internal UHF 2W, Bluetooth, WiFi & 4G LTE Modem"],
      ["Daya Tahan", "Baterai ganda hot-swappable tahan kerja hingga 16 jam"]
    ]'::jsonb,
    NOW()
  ),
  (
    'prod-usv-sv600',
    'SV600-USV',
    'UNMANNED SURFACE VESSEL // Hydrographic Mapping',
    'bathymetry',
    'SV600 USV Autonomous Survey Vessel',
    'Kapal survei tanpa awak (USV) untuk pemetaan batimetri dan hidrografi perairan pelabuhan, sungai, dan danau tambang, dilengkapi single-beam/multibeam echosounder dengan auto-return fail-safe.',
    '/images/solutions-marine.jpg',
    'Available / Ready Stock',
    '[
      ["Depth Reach", "0.15m – 300m Acoustic Sounder"],
      ["Cruising Speed", "6 m/s (12 knots) Dual Jet Propulsion"],
      ["Mission Endurance", "6 Hours Onboard Li-Ion Battery"],
      ["Telemetry Link", "Up to 5 km RF + 4G LTE Auto-Failover"]
    ]'::jsonb,
    NOW()
  )
ON CONFLICT (id) DO UPDATE SET
  code = EXCLUDED.code,
  tag = EXCLUDED.tag,
  category = EXCLUDED.category,
  name = EXCLUDED.name,
  summary = EXCLUDED.summary,
  img = EXCLUDED.img,
  status = EXCLUDED.status,
  specs = EXCLUDED.specs,
  updated_at = NOW();

-- SEED DATA: ARTIKEL RESMI
INSERT INTO public.articles (id, slug, title, excerpt, content, category, published_at, read_time, main_image, author, updated_at)
VALUES
  (
    'art-intro',
    'introducing-terrabyte-geosystem-indonesia',
    'Introducing Terrabyte Geosystem Indonesia',
    'Why we started, what we’re building with TerraPulse-AI and TerraWatch, and where we’re headed next.',
    '## Built in the Field. Driven by Data.

Terrabyte Geosystem Indonesia grew out of real field work. Working alongside PT Lextera Survey Indonesia on radar slope monitoring projects across Indonesian mining and infrastructure sectors, we saw that the hardest part isn’t gathering data, it’s turning it into clear, timely decisions.

### Why We Started

Traditional geospatial monitoring often left field engineers overwhelmed by disparate data streams—unprocessed radar point clouds, isolated GNSS feeds, and delayed reporting. We founded Terrabyte Geosystem Indonesia to bridge this critical gap.

### What We''re Building

- **TerraPulse-AI**: Our analytics platform that ingests raw telemetry from sensors, runs anomaly detection models, and turns complex sensor streams into actionable trend alerts.
- **TerraWatch Center**: A 24/7 dedicated monitoring center staffed by certified engineers who keep continuous watch over site conditions, verify alerts, and escalate critical anomalies.
- **Lextera Partnership**: Direct integration with premier survey instruments, including the ComNav MS-SAR5000 slope radar, high-precision GNSS receivers, and SV600 USVs.

### Where We''re Headed

We are committed to building Indonesia''s foremost geospatial intelligence ecosystem, helping industrial teams make safety decisions long before hazards develop.',
    'Company News',
    '28 Sep 2026',
    '4',
    '/images/hero-bg.jpg',
    '{"name": "Terrabyte Communications", "role": "Corporate Secretariat"}'::jsonb,
    NOW()
  ),
  (
    'art-radar-slope',
    'how-radar-slope-monitoring-gives-early-warning',
    'How radar slope monitoring gives early warning',
    'A plain-language guide to how slope radar detects movement.',
    '## Understanding Ground-Based Radar in Slope Stability

Slope failures in open-pit mines or major infrastructure cuttings rarely happen without warning. Micro-deformations almost always precede major wall collapses. Ground-Based Synthetic Aperture Radar (GB-SAR) such as the MS-SAR5000 detects these subtle phase shifts.

### How It Works

1. **Continuous Scanning**: The radar sweeps the pit face or slope 360 degrees or across defined sectors, emitting microwave signals.
2. **Phase Comparison**: By comparing the reflected phase of signals between consecutive sweeps, the radar measures displacement down to sub-millimeter precision.
3. **Early Alert Generation**: When deformation velocity accelerates beyond predefined safety thresholds, alerts are triggered in TerraPulse-AI and dispatched to site safety officers.',
    'Articles',
    '22 Sep 2026',
    '5',
    'https://xbadzroazjblacumvnpq.supabase.co/storage/v1/object/public/uploads/sar5000.png',
    '{"name": "Radar Engineering Team", "role": "Lead Geotechnical Specialist"}'::jsonb,
    NOW()
  ),
  (
    'art-what-is-terrapulse',
    'what-is-terrapulse-ai',
    'What is TerraPulse-AI?',
    'How our platform turns monitoring data into decisions.',
    '## Turning Earth Data into Actionable Decisions

Collecting massive volumes of sensor telemetry is only the first step. TerraPulse-AI is an end-to-end data platform engineered specifically for geotechnical, structural, and environmental monitoring.

### Core Capabilities

- **Multi-Sensor Fusion**: Unify slope radar, GNSS RTK positioning, piezometers, and weather stations into a single 3D interactive view.
- **Trend Analysis**: Move beyond static thresholds. Machine learning models analyze deformation velocity trends to differentiate between thermal dilation and true structural movement.
- **Fast Response**: Latency of under 5 milliseconds from sensor ingestion to dashboard visualization, backed by TerraWatch operators.',
    'Articles',
    '15 Sep 2026',
    '6',
    '/images/hero-bg.jpg',
    '{"name": "Geotech Software Team", "role": "Senior Architect"}'::jsonb,
    NOW()
  )
ON CONFLICT (id) DO NOTHING;
