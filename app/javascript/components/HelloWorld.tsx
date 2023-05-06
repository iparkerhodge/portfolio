import React, { FC } from "react"

const HelloWorld: FC<{ greeting: string }> = ({ greeting }) => (
  <div>{greeting}</div>
)

export default HelloWorld
