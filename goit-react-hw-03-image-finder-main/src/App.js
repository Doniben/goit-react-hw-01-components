import React, { Component } from 'react';
import { Wrapper, Section, Searchbar, ImageGallery, Modal } from 'components/';
import ScrollToTop from 'react-scroll-up';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './services/styles';

class App extends Component {
  state = {
    showModal: false,
    searchQuery: '',
  };

  handleSubmit = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return toast.info('Input new search query.');
    }

    this.setState({
      searchQuery: searchQuery,
    });
  };

  toggleModal = data => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

    if (this.state.showModal === false) {
      const { largeImageURL, tags } = data;
      this.setState(() => ({
        src: largeImageURL,
        alt: tags,
      }));
    }
  };

  render() {
    const { searchQuery, showModal, src, alt } = this.state;
    const { toggleModal, handleSubmit } = this;

    return (
      <Wrapper>
        <Searchbar onSubmit={handleSubmit} />

        <Section>
          <ImageGallery searchQuery={searchQuery} onModalOpen={toggleModal} />
        </Section>

        {showModal && (
          <Modal onModalClose={toggleModal}>
            <img src={src} alt={alt} style={styles.modalImage} />
          </Modal>
        )}

        {/* Notifications */}
        <ToastContainer autoClose={3000} theme="colored" />

        {/* Scroll to top button */}
        <ScrollToTop showUnder={100} style={styles.upButton}>
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </ScrollToTop>
      </Wrapper>
    );
  }
}

export default App;
