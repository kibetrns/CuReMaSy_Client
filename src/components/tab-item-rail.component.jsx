import "../styles/tab-item-rail.css"
import TabItem from "./tab-item.component"

const TabItemRail = ({tabItemRailStyle, itemStyle, titleStyle}) => {
   

    const handleTabItemClick = (title) => {
        window.alert(`Clicked  ${title}`)
        console.log(`${title.toLowerCase()}`)
        navigate(`/${title.toLowerCase()}`)
      }
    
      const listOfTabItems = [
        {
          title : "Weekly",
          titleStyle : titleStyle,
          tabItemStyle: itemStyle,
          onclick: handleTabItemClick,
        }, 
        {
            title : "Monthly",
            titleStyle : titleStyle,
            tabItemStyle: itemStyle,
            onclick: handleTabItemClick,
          },
          {
            title : "Quarterly",
            titleStyle : titleStyle,
            tabItemStyle: itemStyle,
            onclick: handleTabItemClick,
          },
          {
            title : "Yearly",
            titleStyle : titleStyle,
            tabItemStyle: itemStyle,
            onclick: handleTabItemClick,
          },
          {
            title : "Custom",
            titleStyle : titleStyle,
            tabItemStyle: itemStyle,
            onclick: handleTabItemClick,
          }
       
      ];

    return(
        <div style={tabItemRailStyle}>
            {listOfTabItems.map((item) => {
                return (
                    <TabItem 
                        title={item.title}
                        titleStyle={item.titleStyle}
                        tabItemStyle={item.tabItemStyle}
                        onClick={handleTabItemClick}
                    />
                )
            })}
        </div>
    )
}

export default TabItemRail