import { Bodies, Body, Composite, IChamferableBodyDefinition } from 'matter-js';
import { Graphics } from '@pixi/graphics';
import { ColorSource, Ticker } from '@pixi/core';
import { IDestroyOptions } from '@pixi/display';

export class SquareMatterBody extends Graphics
{
    body!: Body;
    world: Composite;
    disableSelfCleanup = false;

    constructor(
        world: Composite,
        params: {
            x: number;
            y: number;
            width: number;
            height: number;
            color?: ColorSource;
            angle?: number;
        },
        options?: IChamferableBodyDefinition,
    )
    {
        super();

        this.world = world;

        const { x, y, width, height, color } = params;

        this.body = Bodies.rectangle(x, y, width, height, options);
        Composite.add(world, this.body);

        this.body.angle = params.angle ?? 0;

        this.beginFill(color).drawRect(-width / 2, -height / 2, width, height);

        Ticker.shared.add(this.update, this);
    }

    update()
    {
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
