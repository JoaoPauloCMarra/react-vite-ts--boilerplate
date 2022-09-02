import { Component, ErrorInfo, ReactNode } from 'react';

import { Button, Message } from './style';

interface Props {
  children?: ReactNode;
  onRetry?: () => void;
}

interface State {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    message: '',
  };

  constructor(props: Props) {
    super(props);
    this.onRetryClick = this.onRetryClick.bind(this);
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: String(error) };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(' ');
    console.log('A ErrorBoundary report:');
    console.log({ error, errorInfo });
    console.log(' ');
  }

  onRetryClick() {
    if (this.props.onRetry) {
      this.props.onRetry();
    }
    this.setState({ hasError: false, message: '' });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <Message>Oops, there was an issue!</Message>
          <Message>{this.state.message}</Message>
          <Button data-testid="errorboundary-button" onClick={this.onRetryClick}>
            Try again?
          </Button>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
