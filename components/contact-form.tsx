'use client'

import { useState } from 'react'
import { SOCIAL } from '@/lib/content'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Inquiry from ${form.name || 'the website'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:${SOCIAL.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const field =
    'w-full border-b border-border bg-transparent pb-3 pt-2 text-foreground placeholder:text-muted-foreground/70 focus:border-brass focus:outline-none transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-brass">
            Name
          </span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={field}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-brass">
            Email
          </span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={field}
            placeholder="you@studio.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-brass">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${field} resize-none`}
          placeholder="Project, role, dates, and details…"
        />
      </label>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="bg-brass px-8 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-brass-deep"
        >
          Send message
        </button>
        {sent && (
          <p className="text-sm text-muted-foreground" role="status">
            Opening your email client…
          </p>
        )}
      </div>
    </form>
  )
}
