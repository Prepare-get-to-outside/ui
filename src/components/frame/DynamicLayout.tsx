import React from 'react'
import dynamic from 'next/dynamic'

interface DynamicLayoutProps {
  contentLayout?: string
}

interface DynamicLayoutProps {
  layoutProps?: DynamicLayoutProps
  children: React.ReactNode
}

export const DynamicLayout = ({ layoutProps, children }: DynamicLayoutProps) => {
  const layout = layoutProps?.contentLayout || 'DefaultSection'
  const DynamicComponent: React.ComponentType<{ layoutProps?: object }> = dynamic(
    () => import(`@/components/frame/layouts/${layout}`),
  )
  return <DynamicComponent layoutProps={layoutProps}>{children}</DynamicComponent>
}
