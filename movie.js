
function Movie() {
    this.hello = function () {
        return 'hello!';
    }

    this.findMovie = function (name) {
        console.log(name);
        console.log("CHECKING!");
        if (name == 'Monk.S01E01.480p.x264-mSD.mp4') {
            return 'Mr. Monk and the Candidate: Part 1.mp4'
        }
        else if (name == 'Monk.S01E02.XviD-AFG.avi') {
            return 'Mr. Monk and the Candidate: Part 2.avi'
        }
        else if (name == 'Monk.S01E03.XviD-AFG.avi') {
            return 'Mr. Monk and the Psychic.avi'
        }
        else if (name == 'Monk.S01E04.720p.HEVC.x265-MeGusta.mp4') {
            return 'Mr. Monk Meets Dale the Whale.mp4'
        }
        else if (name == 'Monk.S01E05.1080p.HEVC.mp4') {
            return 'Mr. Monk Goes to the Carnival.mp4'
        }
        else if (name == 'Monk.S01E07.XviD-AFG.avi') {
            return 'Mr. Monk and the Billionaire Mugger.avi'
        }
        else if (name == 'Monk.S01E08.4080HD.mkv') {
            return 'Mr. Monk and the Other Woman.avi'
        }
        else {
            return "NO NAME FOUND"
        }
    }
}

module.exports = Movie;