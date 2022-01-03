# @jdthornton/modal

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/modal.svg)](https://www.npmjs.com/package/@jdthornton/modal)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/modal.svg)](https://www.npmjs.com/package/@jdthornton/modal)

React modal component.

## Demo

https://jdthornton.github.io/#/modal

## Install

```
$ npm install @jdthornton/modal
```

## Usage

```js
import Modal, { useModal } from "@jdthornton/modal";
import "@jdthornton/modal/styles.css";

function App(){

  const { isOpen, open, close } = useModal();

  return isOpen ? (
    <Modal close={close}>
      Modal
    </Modal>
  ) : null
}
```


## Props

| Prop                                                                      | Type                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showCloseButton`                                                         | boolean                                                                             | Shows a modal close button                                                                                                                                                                                                                                                                                                                                                                                 |
| `closeOnOverlayClick`                                                     | boolean                                                                             | Closes the modal on overlay click                                                                                                                                                                                                                                                                                                                                                                          |
| `closeOnEsc`                                                              | boolean                                                                             | Closes the modal on 'ESC' key press                                                                                                                                                                                                                                                                                                                                                                        |
| `inertQuerySelector`                                                      | string                                                                              | The query selector for the element to be made inert when the modal is open                                                                                                                                                                                                                                                                                                                                 |
| `className`                                                               | string                                                                              | The modal class                                                                                                                                                                                                                                                                                                                                                                                          |
| `style`                                                                   | object                                                                              | The modal style                                                                                                                                                                                                                                                                                                                                                                                          |
| `overlayClassName`                                                        | string                                                                              | The overlay class                                                                                                                                                                                                                                                                                                                                                                                          |
| `overlayStyle`                                                            | object                                                                              | The overlay style                                                                                                                                                                                                                                                                                                                                                                                          |
| `labelledBy`                                                              | string                                                                              | The aria-labelledby attribute                                                                                                                                                                                                                                                                                                                                                                                           |
| `describedBy`                                                             | string                                                                              | The aria-describedby attribute                                                                                                                                                                                                                                                                                                                                                                                           |
