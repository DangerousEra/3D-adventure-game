import * as THREE from 'https://cdn.jsdelivr.net/npm/three@r128/build/three.module.js';

export default class CameraController {
    constructor(camera, player) {
        this.camera = camera;
        this.player = player;
        
        this.offset = new THREE.Vector3(0, 8, 15);
        this.targetOffset = new THREE.Vector3(0, 8, 15);
        this.lookAheadDistance = 5;
        
        console.log('📹 Camera Controller initialized');
    }

    update(deltaTime) {
        // Calculate camera position relative to player
        const playerPos = this.player.getPosition();
        
        // Smooth camera follow
        const targetPos = new THREE.Vector3(
            playerPos.x + this.offset.x,
            playerPos.y + this.offset.y,
            playerPos.z + this.offset.z
        );
        
        this.camera.position.lerp(targetPos, 0.08);
        
        // Look at point slightly ahead of player
        const lookAtPos = new THREE.Vector3(
            playerPos.x,
            playerPos.y + 1,
            playerPos.z
        );
        
        this.camera.lookAt(lookAtPos);
    }
}