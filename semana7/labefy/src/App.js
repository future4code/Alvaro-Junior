import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`

const PlaylistsContainer = styled.div`
  width: 912px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 32.5px;
  grid-row-gap: 56px;
`

const PlaylistHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 192px;
  height: 192px;
  background-color: #F9B24E;
  border-radius: 12px;
  text-align: center;
`

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  position: absolute;
  top: 8px;
  right: 8px;
`

const TracksContainer = styled.div`
  background-color: #45525B;
  width: 448px;
  padding: 24px 16px;
  position: relative;
`

const apiBaseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const axiosconfig = {
  headers: {
    Authorization: "Álvaro-Joaquim-de-Faria-Barros-Júnior-Dumont"
  }
}

export default class App extends React.Component {
  state = {
    newPlaylistName: "",
    playlists: [],
    playlistName: "",
    playlistId: "",
    playlistTracks: [],
    newTrackName: "",
    newTrackArtist: "",
    newTrackUrl: "",
    showList: false
  }

  componentDidMount () {
    this.getAllPlaylists()
  }

  onChangeNewPlayList = (event) => {
    this.setState({newPlaylistName: event.target.value})
  }

  getAllPlaylists = () => {
    axios.get(apiBaseUrl, axiosconfig).then((res) => {
      this.setState({playlists: res.data.result.list, playlistId: ""})
    }).catch((err) => {
      console.log(err.message)
    })
  }

  getPlaylistTracks = (id, name) => {
    axios.get(`${apiBaseUrl}/${id}/tracks`, axiosconfig).then((res) => {
      this.setState({playlistTracks: res.data.result.tracks,
                      playlistName: name,
                      playlistId: id,
                      showList: true})
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  creatPlaylist = () => {
    const newName = window.prompt("Qual o nome da nova playlist?")

    if ((newName !== null) && (newName !== "")){

      const body ={
        name: newName
      }
      axios.post(apiBaseUrl, body, axiosconfig).then(() => {
        this.setState({newPlaylistName: ""})
        alert("Playlist criada!")
        this.getAllPlaylists()
      }).catch((err) => {
        console.log(err.message)
      })
    }
  }

  deletePlaylist = (id) => {
    axios.delete(`${apiBaseUrl}/${id}`, axiosconfig).then(() => {
      alert("Playlist deletada!")
      this.getAllPlaylists()
    }).catch((err) => {
      console.log(err.message)
    })
  }

  addTrackToPlaylist = (id) => {
    const body = {
      name: this.state.newTrackName,
      artist: this.state.newTrackArtist,
      url: this.state.newTrackUrl
    }
    axios.post(`${apiBaseUrl}/${id}/tracks`, body, axiosconfig).then(()=>{
      this.getPlaylistTracks(id, this.state.playlistName)
      alert("Música adicionada!")
      this.setState({newTrackName: "",
                      newTrackArtist:"",
                      newTrackUrl:""})
    }).catch((err) => {
      console.log(err.message)
    })
  }

  removeTrackFromPlaylist = (id) => {
    axios.delete(`${apiBaseUrl}/${this.state.playlistId}/tracks/${id}`, axiosconfig).then(()=>{
      this.getPlaylistTracks(this.state.playlistId, this.state.playlistName)
      alert("Música Removida!")
    }).catch((err) => {
      console.log(err.message)
    })
  }

  onChangeNewTrackName = (event) => {
    this.setState({newTrackName: event.target.value})
  }

  onChangeNewPlayArtist = (event) => {
    this.setState({newTrackArtist: event.target.value})
  }

  onChangeNewTrackUrl = (event) => {
    this.setState({newTrackUrl: event.target.value})
  }

  onClickReturn = () => {
    this.setState({showList: !this.state.showList})
  }

  render () {
    console.log(this.state)
    const Playlists = this.state.playlists.map((playlist) => {
      return <PlaylistHolder key={playlist.id}>
          <p onClick={() => this.getPlaylistTracks(playlist.id, playlist.name)}>
          {playlist.name}
          <RemoveButton onClick={() => this.deletePlaylist(playlist.id)}>x</RemoveButton>
          </p>
        </PlaylistHolder>
    })

    const Tracks = this.state.playlistTracks.map((track)=>{
      return <div key={track.id}>
        <p>{track.name}</p>
        <p>{track.artist}</p>
        <audio controls src={track.url} type="audio/mp3"></audio>
        <button onClick={() => this.removeTrackFromPlaylist(track.id)}>Remover</button>
      </div>
    })
    return (
      <div className="App">
        <MainContainer>
          {/* <input  onChange={this.onChangeNewPlayList}
                  value={this.state.newPlaylistName}/>
          <button onClick={this.creatPlaylist}>Criar Nova Playlist</button> */}
          <PlaylistsContainer>
            {Playlists}
            <PlaylistHolder onClick={this.creatPlaylist}>Add</PlaylistHolder>
          </PlaylistsContainer>
          {this.state.showList && <TracksContainer>
            <RemoveButton onClick={this.onClickReturn}>x</RemoveButton>
            <h2>{this.state.playlistName}</h2>
            <input  onChange={this.onChangeNewTrackName}
                    value={this.state.newTrackName}
                    placeholder="Nome"/>
            <input  onChange={this.onChangeNewPlayArtist}
                    value={this.state.newTrackArtist}
                    placeholder="artista"/>
            <input  onChange={this.onChangeNewTrackUrl}
                    value={this.state.newTrackUrl}
                    placeholder="url"/>
            <button onClick={() => this.addTrackToPlaylist(this.state.playlistId)}>Adicionar Música</button>
            {Tracks}</TracksContainer>}
        </MainContainer>
      </div>
    );
  }
}
