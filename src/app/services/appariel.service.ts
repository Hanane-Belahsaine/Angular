export class Apparielservice {

  Appariels = [
    {
      id: 1,
      Name: 'ORDINATEUR',
      Statut: 'Allumée'
    },
    {
      id: 2,
      Name: 'TELEVISION',
      Statut: 'Etient'
    }
  ]


  getApparielById(id: number) {
    const appariel = this.Appariels.find(
      (s) => {
        return s.id === id;
      }
    );
    return appariel;
  }



  switchOnAll() {
    for (let appariel of this.Appariels) {
      appariel.Statut = 'Allumée';
    }
  }

  switchOffAll() {
    for (let appariel of this.Appariels) {
      appariel.Statut = 'Etient';
    }
  }

  switchOnOne(index: number) {
    this.Appariels[index].Statut = 'Allumée';
  }

  switchOffOne(index: number) {
    this.Appariels[index].Statut = 'Etient';
  }
}
