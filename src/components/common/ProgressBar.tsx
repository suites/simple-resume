import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: #ccc;
`;

const Progress = styled.div`
  height: 8px;
  background: #3a7bd5;
  width: ${(props: { scrolled: string }) => props.scrolled};
`;

export class ProgressBar extends React.Component<{}, { scrolled: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      scrolled: '0%',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}%`;

    this.setState({
      scrolled,
    });
  }
  render() {
    return (
      <ProgressContainer>
        <Progress scrolled={this.state.scrolled} />
      </ProgressContainer>
    );
  }
}
