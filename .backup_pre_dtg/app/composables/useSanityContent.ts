import { createClient } from '@sanity/client'

export interface Article {
  _id: string
  title: string
  slug: string
  publishedAt: string
  category: string
  readTime: string
  excerpt: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  mainImage: string
  content?: string
  tags?: string[]
}

export interface ProductItem {
  _id?: string
  name: string
  model: string
  code?: string
  slug?: string
  category: string
  tag?: string
  tagline?: string
  description: string
  summary?: string
  mainImage?: string
  img?: string
  badge?: string
  features?: string[]
  specs?: [string, string][]
  datasheetPdfUrl?: string
}

// Default hardware platforms if none published yet in CMS
const defaultProducts: ProductItem[] = [
  {
    code: 'NX-700',
    model: 'NX-700',
    tag: 'GNSS Receiver',
    category: 'GNSS Systems',
    name: 'NX-700 Multi-Constellation GNSS Receiver',
    summary: 'Carrier-phase GNSS engine with 1,408 tracking channels across GPS, GLONASS, Galileo, and BeiDou. Sub-millimeter network RTK sensitivity with integrated anti-jamming spatial nulling antenna arrays.',
    description: 'Carrier-phase GNSS engine with 1,408 tracking channels across GPS, GLONASS, Galileo, and BeiDou. Sub-millimeter network RTK sensitivity with integrated anti-jamming spatial nulling antenna arrays.',
    img: '/images/products-nx700.jpg',
    mainImage: '/images/products-nx700.jpg',
    badge: 'Flagship Platform',
    specs: [
      ['Channels', '1,408 Multi-Band'],
      ['RTK Accuracy', 'H: 1mm + 0.5ppm, V: 2.5mm + 0.5ppm'],
      ['Constellations', 'GPS, GLO, GAL, BDS, QZSS, NavIC'],
      ['Anti-Jamming', 'Spatial Nulling Array (CRPA)'],
      ['Ingress Rating', 'IP68 / MIL-STD-810H'],
      ['Telemetry', 'UHF 2W / LTE-M / Ethernet / CANBus'],
    ],
  },
  {
    code: 'NX-500',
    model: 'NX-500',
    tag: 'Radar System',
    category: 'Radar & Airspace',
    name: 'NX-500 Solid-State Surveillance Radar',
    summary: 'X-band pulse-Doppler coherent radar with active phased array transceiver. Low-RCS micro-UAV detection to 18 km, maritime surface tracking to 45 km with automated track-while-scan algorithms.',
    description: 'X-band pulse-Doppler coherent radar with active phased array transceiver. Low-RCS micro-UAV detection to 18 km, maritime surface tracking to 45 km with automated track-while-scan algorithms.',
    img: '/images/products-nx500.jpg',
    mainImage: '/images/products-nx500.jpg',
    badge: 'Tactical Defense',
    specs: [
      ['Operating Band', 'X-Band (9.2 – 9.6 GHz) Coherent'],
      ['Instrumented Range', '45 km (Surface) / 18 km (Air Low-RCS)'],
      ['Beam Steering', 'Electronic Elevation, Mechanical Azimuth'],
      ['Target Capacity', '256 simultaneous track-while-scan'],
      ['Cooling', 'Solid-state conduction, fanless'],
      ['Interface', 'Asterix Cat-048 / DDS / Ethernet'],
    ],
  },
  {
    code: 'NX-300',
    model: 'NX-300',
    tag: 'LiDAR Platform',
    category: 'LiDAR & Hydrographic',
    name: 'NX-300 Dual-Axis Airborne LiDAR & Sensor Pod',
    summary: 'Lightweight dual-wavelength (near-IR + green bathymetric) sensor fusion pod for UAV survey missions. 2.4 million shots/sec laser pulse rate with integrated IMU/GNSS position engine.',
    description: 'Lightweight dual-wavelength (near-IR + green bathymetric) sensor fusion pod for UAV survey missions. 2.4 million shots/sec laser pulse rate with integrated IMU/GNSS position engine.',
    img: '/images/products-nx300.jpg',
    mainImage: '/images/products-nx300.jpg',
    badge: 'Dual-Wavelength',
    specs: [
      ['Pulse Rate', '2.4 Million shots/sec dual-laser'],
      ['Operational Alt', '50 m to 1,200 m AGL'],
      ['Penetration', 'Hydrographic depth to 2.5 Secchi depths'],
      ['IMU Accuracy', 'Roll/Pitch 0.005°, Heading 0.015°'],
      ['Payload Weight', '3.2 kg carbon-fiber housing'],
      ['Output Formats', 'LAS 1.4, LAZ, GeoTIFF, PointCloud xyz'],
    ],
  },
]

export const useSanityContent = () => {
  const client = createClient({
    projectId: 'hzmtw7ck',
    dataset: 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
  })

  // 1. ARTICLES & WHITE PAPERS
  const getArticles = async (): Promise<Article[]> => {
    try {
      const query = `*[_type == "article" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        category,
        readTime,
        excerpt,
        "author": coalesce(author->, author, {"name": "Terrabyte Team", "role": "Specialist"}),
        "mainImage": coalesce(mainImage.asset->url, "/images/hero-bg.jpg"),
        tags,
        content
      }`
      const data = await client.fetch(query)
      return data || []
    } catch (err) {
      console.warn('Sanity getArticles warning:', err)
      return []
    }
  }

  const getArticleBySlug = async (slug: string): Promise<Article | null> => {
    try {
      const query = `*[_type == "article" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        category,
        readTime,
        excerpt,
        "author": coalesce(author->, author, {"name": "Terrabyte Team", "role": "Specialist"}),
        "mainImage": coalesce(mainImage.asset->url, "/images/hero-bg.jpg"),
        tags,
        content
      }`
      const data = await client.fetch(query, { slug })
      return data || null
    } catch (err) {
      console.warn('Sanity getArticleBySlug warning:', err)
      return null
    }
  }

  // 2. HARDWARE PRODUCTS & SYSTEMS
  const getProducts = async (): Promise<ProductItem[]> => {
    try {
      const query = `*[_type == "product" && !(_id in path("drafts.**"))] | order(order asc, _createdAt desc) {
        _id,
        name,
        model,
        "code": model,
        "slug": slug.current,
        category,
        "tag": category,
        badge,
        tagline,
        description,
        "summary": description,
        "img": coalesce(mainImage.asset->url, "/images/hero-bg.jpg"),
        "mainImage": coalesce(mainImage.asset->url, "/images/hero-bg.jpg"),
        features,
        specs,
        datasheetPdfUrl
      }`
      const data = await client.fetch(query)
      if (data && data.length > 0) {
        return data.map((item: any) => {
          let formattedSpecs: [string, string][] = []
          if (Array.isArray(item.specs)) {
            formattedSpecs = item.specs.map((s: any) => {
              if (Array.isArray(s)) return s
              return [s.label || '', s.value || '']
            })
          }
          return {
            ...item,
            specs: formattedSpecs.length > 0 ? formattedSpecs : defaultProducts[0].specs
          }
        })
      }
    } catch (err) {
      console.warn('Sanity getProducts warning:', err)
    }
    return defaultProducts
  }

  return {
    getArticles,
    getArticleBySlug,
    getProducts,
  }
}
