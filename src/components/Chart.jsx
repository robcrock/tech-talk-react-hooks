import { useContext } from "react"
import { ThemeContext } from "../App"
import { LineChart } from "d3reactor"
import useWindowSize from "../hooks/useWindowSize"
import data from "../data.json"

const Header = () => {
  const { theme } = useContext(ThemeContext)
  const { width } = useWindowSize()

  return (
    <div className="chart-wrapper" style={{ height: "50vh", width: "75vw" }}>
      <h2>The Rise and Fall of Programming Languages</h2>
      <p>Popularity of programming languages since 2004.</p>
      <LineChart
        height="100%"
        width="100%"
        data={data}
        xKey="Date"
        yKey="popularity"
        xAxis="bottom"
        groupBy="language"
        yAxis="left"
        yGrid={true}
        yAxisLabel="Popularity (%)"
        colorScheme="schemeBlues"
        theme={theme}
        legend={width < 1000 ? "bottom" : "right"}
      />
    </div>
  )
}

export default Header
