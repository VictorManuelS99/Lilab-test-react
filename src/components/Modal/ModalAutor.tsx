import { Component } from "react";
import { getUserById } from "../../util/services/UserService";
import { UserFull, UserPreview } from "../../util/types/UserTypes";
import { Modal } from "./Modal";
import {
  CloseBtn,
  ModalAutorContainer,
  ModalAutorStyled,
  Spinner,
} from "../Modal/Modal.style";
import { BiCake, BiMailSend, BiMap, BiPhone } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

type ModalAutorProps = {
  isOpen: boolean;
  closeModal: () => void;
  autor: UserPreview;
};

type StateModalAutor = {
  user: UserFull | null;
};

export class ModalAutor extends Component<ModalAutorProps, StateModalAutor> {
  state: StateModalAutor = {
    user: null,
  };

  componentDidMount() {
    this.getAutor();
  }

  render() {
    const { closeModal, isOpen } = this.props;
    const { user } = this.state;

    return (
      <Modal isOpen={isOpen}>
        <ModalAutorContainer>
          {user ? (
            <ModalAutorStyled>
              <img
                src={user.picture}
                alt={"user " + user.firstName}
                width="120"
              />
              <h3>{`${user.title}. ${user.firstName} ${user.lastName}`}</h3>
              <p>
                <BiPhone color="#4c4c4c" /> {user.phone}
              </p>
              <p>
                <BiMailSend color="#4c4c4c" /> {user.email}
              </p>
              <p>
                <BiCake color="#4c4c4c" />
                {new Date(user.dateOfBirth).toLocaleDateString()}
              </p>
              <p>
                <BiMap color="#4c4c4c" /> {user.location.city} /{" "}
                {user.location.country}
              </p>
            </ModalAutorStyled>
          ) : (
            <Spinner />
          )}
          <CloseBtn onClick={closeModal}>
            <AiFillCloseCircle size="32" color="black" />
          </CloseBtn>
        </ModalAutorContainer>
      </Modal>
    );
  }

  async getAutor() {
    const user = await getUserById(this.props.autor.id);
    await this.setState((state) => ({ ...state, user }));
  }
}
