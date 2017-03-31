import * as React from "react";

interface PageProps {}
interface PageState {}

export default class App extends React.Component<PageProps, PageState> {
    constructor () {
        super();
    }

    render(): JSX.Element {
        return (
            <div>
                This is the app page.
            </div>
        );
    }
}