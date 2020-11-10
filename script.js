const {useState } = React

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick=()=>{
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

const TimerWithHooks = () => {
  const [seconds, setSeconds] = useState(0);
  
  
  const tick = () => setSeconds(seconds + 1);

  return (
    <div> Seconds: {seconds ? seconds : tick()} </div>
  ) 
}
ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);