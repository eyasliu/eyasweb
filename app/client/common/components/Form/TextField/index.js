import style from './style.scss';

export default class TextFiled extends Component{
  constructor(props){
    super();
  }
  static defaultProps = {
    label: '',
    checked: false,
    onChange: () => {},
    width: '100%'
  }
  componentDidMount(){
    componentHandler.upgradeElement(this.refs.mdl);
  }
  render(){
    const {width} = this.props;
    return (
<div 
  ref="mdl" 
  style={{width: width == 'auto' || ('' + width).indexOf('%') ? width : width + 'px'}} 
  className={cx("mdl-textfield mdl-js-textfield mdl-textfield--floating-label", style.text)}>
  <input className="mdl-textfield__input" type="text" value={this.props.value} />
  <label className="mdl-textfield__label" htmlFor="sample3">{this.props.label}</label>
</div>
    );
  }
}