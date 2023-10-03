import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader className="flower-block"
    speed={2}
    width={280}
    height={427}
    viewBox="0 0 280 427"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="7" y="5" rx="0" ry="0" width="260" height="260" /> 
    <rect x="68" y="275" rx="10" ry="10" width="137" height="26" /> 
    <rect x="7" y="316" rx="10" ry="10" width="261" height="60" /> 
    <rect x="7" y="395" rx="10" ry="10" width="118" height="28" /> 
    <rect x="157" y="387" rx="10" ry="10" width="110" height="37" />
  </ContentLoader>
)

export default Skeleton;

