import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile staus component", () => {
    test("ProfileStatus should gave correct state based on status prop", () => {
        const component = create(<ProfileStatus updateUserStatus={() => {}} status={"Hello world!"}/>);
        const instance = component.getInstance();
        if(instance) {
            //@ts-ignore
            expect(instance.state.status).toBe("Hello world!");
        }
    });

    test("ProfileStatus should display <span> with status", () => {
        const component = create(<ProfileStatus updateUserStatus={() => {}} status={"Hello world!"}/>);
        const instance = component.root;
        const span = instance?.findByType("span");
        //@ts-ignore
        expect(span?.children[0]).toBe("Hello world!");
    });

    test("After ProfileStatus creation <input> should not be displayed", () => {
        const component = create(<ProfileStatus updateUserStatus={() => {}} status={"Hello world!"}/>);
        const instance = component.root;
        expect(() => {
            const input = instance?.findByType("input");
        }).toThrow();
    });

    test("After double click we should receive input", () => {
        const component = create(<ProfileStatus updateUserStatus={() => {}} status={"Hello world!"}/>);
        const instance = component.root;
        const span = instance.findByType("span");
        span.props.onDoubleClick()
        const input = instance.findByType("input");
        expect(input.props.value).toBe("Hello world!");
    });

    test("Callback function should operate", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus updateUserStatus={mockCallback} status={"Hello world!"}/>);
        const instance = component.getInstance();
        //@ts-ignore
        instance.updateStatus();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});