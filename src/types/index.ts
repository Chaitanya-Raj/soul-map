export interface Concept {
  id: string
  title: string
  slug: string
  summary: string
  category: 'structure' | 'archetype' | 'process'
  difficulty: 'foundational' | 'intermediate' | 'advanced'
  color: {
    primary: string
    secondary: string
  }
  icon?: string
  relatedConcepts: string[]
  order: number
}