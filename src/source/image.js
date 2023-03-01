function Image(props)
{
  const overlap = 200;
  var bg_top = (props.pd.rel_scroll)*overlap;
  const overlap_front = 100;
  var bg_top_front = (props.pd.rel_scroll)*overlap_front;
  if(props.index !== props.pd.index)
  {
    bg_top_front = 0;
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
  var bg_style_front = {
    backgroundImage: "url("+props.image+")",
    top:bg_top_front+"px"
  };
  return (
    <div className='container' style={container_style}>
      <div className="image" style={bg_style}/>
      <div className="image_front" style={bg_style_front}/>
    </div>);
}

export default Image;
