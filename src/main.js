import SplashScreen from './SplashScreen.js';
import Game from './Game.js';

class App {
    constructor() {
        this.splashScreen = null;
        this.game = null;
        this.isGameRunning = false;
        
        this.init();
    }

    init() {
        console.log('🎮 Initializing 3D Adventure Game...');
        
        // Start splash screen
        this.splashScreen = new SplashScreen();
        this.splashScreen.onComplete = () => this.startGame();
        
        // Handle keyboard for skipping splash
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !this.isGameRunning) {
                e.preventDefault();
                this.splashScreen.skip();
            }
        });
    }

    startGame() {
        console.log('🚀 Starting game...');
        this.isGameRunning = true;
        
        // Initialize game
        this.game = new Game();
        this.game.start();
        
        // Hide controls hint after interaction
        setTimeout(() => {
            const hint = document.getElementById('controlsHint');
            if (hint) {
                hint.addEventListener('click', () => {
                    hint.classList.add('hidden');
                });
            }
        }, 2000);
    }
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new App();
    });
} else {
    new App();
}