function Image(props)
{
  const overlap = 200;
  var bg_top = (props.pd.rel_scroll)*overlap;
  if(props.index !== props.pd.index)
  {
    bg_top = 0;
  }
  var container_style=
  {
    height: props.pd.height+"px"
  };
  var bg_style = {
    backgroundImage: "url("+props.image+")",
    top:bg_top+"px"
  };
  return (
    <div className='container' style={container_style}>
      <div className="image" style={bg_style}/>
    </div>);
}

export default Image;
