export default function Template({ children } : { children: React.ReactNode }) {
  return <div className="template-wrap">
    <p>template_title</p>
    {children}
  </div>
}