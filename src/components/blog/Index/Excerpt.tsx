// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

// SyntaxHighlighter.registerLanguage('javascript', javascript)

type Props = {
    excerpt: string
    // slug: string
    className?: string
}

export default function Excerpt({ /* slug, */ excerpt, className }: Props) {
    return <div className={className}>{excerpt}</div>
}
