export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="dashboard-layout pl-10">
      <p>dashboard-layout</p>
      {children}
    </div>
  )
}