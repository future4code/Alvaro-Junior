import React from 'react'
import axios from 'axios'
import './App.css';

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
    showList: true
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
                      showList: false})
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  creatPaylist = () => {
    const body ={
      name: this.state.newPlaylistName
    }
    axios.post(apiBaseUrl, body, axiosconfig).then(() => {
      this.setState({newPlaylistName: ""})
      alert("Playlist criada!")
    }).catch((err) => {
      console.log(err.message)
    })
  }

  deletePlaylist = (id) => {
    axios.delete(`${apiBaseUrl}/${id}`, axiosconfig).then(() => {
      this.getAllPlaylists()
      alert("Playlist deletada!")
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
      return <p key={playlist.id} 
        onClick={() => this.getPlaylistTracks(playlist.id, playlist.name)}>
        {playlist.name}
        <button onClick={() => this.deletePlaylist(playlist.id)}>Remover</button>
        </p>
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
        <input  onChange={this.onChangeNewPlayList}
                value={this.state.newPlaylistName}/>
        <button onClick={this.creatPaylist}>Criar Nova Playlist</button>
        {this.state.showList ? Playlists : <div>
          <button onClick={this.onClickReturn}>Voltar a Lista de Playlists</button>
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
          {Tracks}</div>}
      </div>
    );
  }
}
