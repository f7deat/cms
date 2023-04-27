import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import YoutubeEmbed from "./youtube";

class YoutubeVideo extends Component<{ data?: any }> {

    constructor(props: any) {
        super(props);
        this.state = {data: {}};
      }

    static get toolbox() {
        return {
            title: 'Youtube',
            icon: '📹'
        };
    }
    nodes: any = {
        holder: null,
    };

    onChange(values: any) {
        this.setState({
            data: values
        })
    }

    render() {
        const wrapper = document.createElement('div');
        const root = ReactDOM.createRoot(wrapper);
        this.nodes.holder = wrapper;
        root.render(
            <React.StrictMode>
                <YoutubeEmbed src={this.props.data.url} />
            </React.StrictMode>
        );
        return wrapper as any;
    }

    save(e: any) {
        const i = e.querySelector('iframe');
        if (i) {
            return {
                url: i.src
            }
        }
        return {}
    }
}

export default YoutubeVideo