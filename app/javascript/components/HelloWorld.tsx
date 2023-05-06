import React, { FC } from "react"

const HelloWorld: FC<{ greeting: string }> = ({ greeting }) => (
  <div className="text-red-600">{greeting}</div>
)

export default HelloWorld
