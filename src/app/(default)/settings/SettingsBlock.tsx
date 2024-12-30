interface SettingsSectionProps {
  heading: string
  description: string
  children: React.ReactNode
}

const SettingsBlock = ({ children, description, heading }: SettingsSectionProps) => {
  return (
    <div className="mb-3 w-full max-w-[420px] space-y-2">
      <div>
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-sm text-foreground-500">{description}</p>
      </div>
      {children}
    </div>
  )
}

export { SettingsBlock }
