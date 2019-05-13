import { observable, action } from 'mobx';

class testStore {
    @observable isShowModal = false;

    @action hideModal = () => {
        this.isShowModal = false;
    }

    @action showModal = () => {
        this.isShowModal = true;
    }
}

export default new testStore();