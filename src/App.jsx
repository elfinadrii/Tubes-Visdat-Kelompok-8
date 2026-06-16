import { useState, useEffect } from 'react'
import Header from './components/Header'
import DemandChart from './components/DemandChart'
import KpiCards from './components/KpiCards'
import SmartSmeltingTabs from './components/SmartSmeltingTabs'
import CopperSimulator from './components/CopperSimulator'
import GreenJobs from './components/GreenJobs'
import SustainabilityWidgets from './components/SustainabilityWidgets'
import { Zap, Layers, ChevronRight } from 'lucide-react'

function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest-600 via-forest-500 to-teal-600 p-6 sm:p-8 text-white shadow-xl">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
            Dashboard Interaktif 2026
          </div>
          <div className="hidden sm:flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-full">
            <Layers size={11} />
            3 Pilar Interaktivitas
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-2">
          Tembaga: Jantung<br />
          <span className="text-teal-200">Elektrifikasi Nasional</span>
        </h1>
        <p className="text-sm sm:text-base text-forest-100 max-w-xl mb-6 leading-relaxed">
          Optimalisasi Hilirisasi Tembaga dalam Mendukung Transisi Energi dan Pembangunan Hijau Indonesia
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Lonjakan Material', value: '+400%', sub: 'EV vs ICE' },
            { label: 'Green Jobs 2030', value: '5.3 Juta', sub: 'Pekerjaan Hijau' },
            { label: 'Proyeksi 2030', value: '157.4', sub: 'Indeks Permintaan' },
            { label: 'Akurasi AI', value: '98.5%', sub: 'Prediksi Anomali' },
          ].map(stat => (
            <div key={stat.label} className="bg-white/15 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-lg sm:text-xl font-extrabold">{stat.value}</p>
              <p className="text-xs font-semibold text-forest-100">{stat.label}</p>
              <p className="text-xs text-forest-200">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PilarBadge({ num, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-lg bg-forest-500 flex items-center justify-center">
          <span className="text-xs font-bold text-white">{num}</span>
        </div>
        <span className="text-xs font-bold text-forest-600 dark:text-forest-400 uppercase tracking-wider">{label}</span>
      </div>
      <ChevronRight size={14} className="text-gray-300 dark:text-slate-600" />
    </div>
  )
}

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300`}>
      <Header dark={dark} onToggle={() => setDark(d => !d)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <HeroSection />

        {/* Pilar 1: Dynamic Filtering */}
        <section>
          <PilarBadge num="1" label="Menyaring" />
          <div className="mt-3">
            <DemandChart dark={dark} />
          </div>
        </section>

        {/* Pilar 2: Interactive Clicks */}
        <section>
          <PilarBadge num="2" label="Mengklik & Hover" />
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <KpiCards />
            <SmartSmeltingTabs />
          </div>
        </section>

        {/* Pilar 3: Independent Exploration */}
        <section>
          <PilarBadge num="3" label="Eksplorasi Mandiri" />
          <div className="mt-3">
            <CopperSimulator />
          </div>
        </section>

        {/* Green Jobs & Sustainability */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-teal-500 flex items-center justify-center">
              <Zap size={13} className="text-white" />
            </div>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Green Economy</span>
            <ChevronRight size={14} className="text-gray-300 dark:text-slate-600" />
          </div>
          <div className="space-y-5">
            <GreenJobs />
            <SustainabilityWidgets />
          </div>
        </section>

        <footer className="text-center py-6 border-t border-gray-200 dark:border-slate-700">
          <p className="text-xs text-gray-400 dark:text-slate-500">
            Sumber Data: Laporan Kinerja Manufaktur Kemenperin 2026 · Data Penjualan BEV GAIKINDO 2026 ·
            Petriella, Y. (2025, May 2). Bisnis.com
          </p>
          <p className="text-xs text-gray-400 dark:text-slate-500 mt-1">
            Dashboard Interaktif — Tembaga: Jantung Elektrifikasi Nasional
          </p>
        </footer>
      </main>
    </div>
  )
}
