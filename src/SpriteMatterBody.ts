import { Bodies, Body, Composite, IChamferableBodyDefinition } from 'matter-js';
import { Texture, Ticker } from '@pixi/core';
import { IDestroyOptions } from '@pixi/display';
import { Sprite } from '@pixi/sprite';

export class SpriteMatterBody extends Sprite
{
    body!: Body;
    world: Composite;
    disableSelfCleanup = false;

    constructor(
        world: Composite,
        params: {
            texture: string;
            x: number;
            y: number;
            angle?: number;
        },
        options?: IChamferableBodyDefinition,
    )
    {
        super();

        this.world = world;

        this.anchor.set(0.5);

        const { x, y, texture } = params;

        const te = Texture.from(texture);

        this.body = Bodies.rectangle(x, y, te.width, te.height, options);
        Composite.add(world, this.body);

        this.body.angle = params.angle ?? 0;

        this.texture = te;

        Ticker.shared.add(this.update, this);
    }

    update()
    {
        if (!this.body) return;

        this.x = this.body.position.x;
        this.y = this.body.position.y;
        this.rotation = this.body.angle;

        if (!this.disableSelfCleanup && this.y - this.height > window.innerHeight)
        {
            this.destroy();
        }
    }

    override destroy(options?: boolean | IDestroyOptions | undefined): void
    {
        Ticker.shared.remove(this.update, this);
        this.parent?.removeChild(this);
        Composite.remove(this.world, this.body);
        super.destroy(options);
    }

    beforeUnload() {}

    resetPosition(x: number, y: number)
    {
        Body.setPosition(this.body, { x, y });
        Body.setVelocity(this.body, { x: 0, y: 0 });
        Body.setAngularVelocity(this.body, 0);
    }
}
